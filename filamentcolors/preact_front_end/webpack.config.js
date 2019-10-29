const config = {
    resolve: {
        alias: {
            'react': 'preact/compat',
            'react-dom': 'preact/compat',
            // Not necessary unless you consume a module using `createClass`
            'create-react-class': 'preact/compat/lib/create-react-class',
            // Not necessary unless you consume a module requiring `react-dom-factories`
            'react-dom-factories': 'preact/compat/lib/react-dom-factories'
        }
    },
};

export default config;
