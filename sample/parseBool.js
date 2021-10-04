const parseBool = (string) => {
    if( string==='true' || string==='false'){
        return string === 'true';
    } else {
        console.error('[parseBool]unexpedted Argument');
        return null;
    }
    
}

export { parseBool };