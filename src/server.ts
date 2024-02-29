import 'dotenv/config';

import App from './App.js';

App.listen(process.env.PORT ?? 3013, () => {
    console.log(`Server started on port ${process.env.PORT ?? 3013}`);
});
