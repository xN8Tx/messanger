import { Express } from 'express';

const startHttp = (app: Express, PORT: string) => {
  try {
    // eslint-disable-next-line no-console
    app.listen(PORT, () => console.log('HTTP server listening on port ' + PORT));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export default startHttp;
