/* eslint-disable react/no-danger */
/* eslint-disable react/react-in-jsx-scope */
import Document, { Head, Main, NextScript } from 'next/document';

export default class D extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="vi">
        <Head>
          <link rel="icon" type="image/png" href="https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-9/52450069_1244416252350097_4263800870111543296_o.jpg?_nc_cat=103&_nc_oc=AQkr71IjoW5A-nwZ1B6EDpPbq1ezM87gKs8R6u3qCHnX6r3farJ0KsYKEUUDFAcGsFBu7clAvhTeht1WnCRlM4gX&_nc_ht=scontent.fsgn5-7.fna&oh=dd6926dd1030c4336819dd7338a6785c&oe=5E363849"></link>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900"
            rel="stylesheet"
            key="font-seccond"
          />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
