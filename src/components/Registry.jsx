import React from 'react'

const Registry = () => {
    return (
        <div className="registry container mx-auto flex flex-col bg-light-blue-100">
            <div className="registry-text flex flex-col gap-1 font-anton text-light-blue-500">
                <span>Your presence is our present! Getting us a gift is by no means an expectation. If you would like to, we have put together this page to help offer some suggestions of things that would be meaningful to us. We also understand how lucky and privileged we are, and therefore, we have included meaningful charities to us on our registry if you would like to donate instead of a gift.</span>
            </div>
            <a href="https://www.zola.com/registry/delaneymillerwedding" target="_blank" rel="noreferrer" className="registry-button flex-center border w-64 h-8 rounded-lg bg-light-blue-500 text-light-blue-100">Joe & Sasha's Registry</a>
        </div>
    )
}

export default Registry;