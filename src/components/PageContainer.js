import {useState} from 'react'

import Gallery from './Gallery'
import Header from './Header'

function PageContainer(){
    const [search, setSearch] = useState('octocat')
    const [show, setShow] = useState(false);

    return (
        <>
            <Header 
                setSearch={setSearch}
                show={show}
                setShow={setShow} 
            />
            <Gallery search={search} setShow={setShow} show={show}/>
        </>
    )

}

export default PageContainer;