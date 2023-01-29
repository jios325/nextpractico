import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
    render() {
        return (
            <Html lang="es">
                <Head>
                    <title>Next Shop</title>
                    
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
};

export default MyDocument;
