import { dirname } from 'path';

import { fileURLToPath } from 'url';

export const getDirectoryPath = (metaUrl: string) =>
    dirname(fileURLToPath(metaUrl));
