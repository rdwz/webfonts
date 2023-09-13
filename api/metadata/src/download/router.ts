import { error, type IRequestStrict, Router, withParams } from 'itty-router';

import { getOrUpdateId } from '../fonts/get';
import type { CFRouterContext } from '../types';
import { getOrUpdateZip } from './get';

interface DownloadRequest extends IRequestStrict {
	id: string;
}

const router = Router<DownloadRequest, CFRouterContext>();

router.get('/v1/download/:id', withParams, async (request, env, ctx) => {
	const id = request.id;

	const data = await getOrUpdateId(id, env, ctx);
	if (!data) {
		return error(404, 'Not Found.');
	}

	const zip = await getOrUpdateZip(request, data, env);
	if (!zip) {
		return error(404, 'Zip Not Found.');
	}

	return new Response(zip.body, {
		headers: {
			'Content-Type': 'application/zip',
			'Content-Disposition': `attachment; filename="${id}.zip"`,
		},
	});
});

// 404 for everything else
router.all('*', () =>
	error(
		404,
		'Not Found. Please refer to the Fontsource API documentation: https://fontsource.org/docs/api',
	),
);

export default router;
