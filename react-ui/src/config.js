    let BACKEND_SERVER = null;
    console.log(process.env.BACKEND_SERVICE);
    BACKEND_SERVER = process.env.BACKEND_SERVICE;
    
    const config = {
        // basename: only at build time to set, and don't add '/' at end off BASENAME for breadcrumbs, also don't put only '/' use blank('') instead,
        // like '/berry-material-react/react/default'
        basename: '',
        defaultPath: '/dashboard/default',
        fontFamily: `'Roboto', sans-serif`,
        borderRadius: 12,
        API_SERVER: BACKEND_SERVER
    };

    export default config;
