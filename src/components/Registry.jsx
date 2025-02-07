import React from 'react'

const Registry = () => {
    return (
        <div className="registry container mx-auto flex flex-col bg-light-blue-100">
            <div className="registry-text flex flex-col gap-1 font-anton text-light-blue-500">
                <span>Your presence at our wedding is the best present! There is absolutely no requirement to give us a gift, but we have put together this registry to offer suggestions. Please click the button below to view our registry.</span>
            </div>
            <a href="https://www.zola.com/registry/delaneymillerwedding" target="_blank" rel="noreferrer" className="registry-button flex-center border w-64 h-8 rounded-lg bg-light-blue-500 text-light-blue-100">Joe & Sasha's Registry</a>
        </div>
    )
}

export default Registry;