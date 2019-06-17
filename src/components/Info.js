import React, { useState } from 'react' ;

const Info = () => {
    const [name, setName] = useState('') ;
    const [phone, setPhone] = useState('') ;

    const onChangeName = e => {
        setName(e.target.value) ;
    } ;

    const onChangePhone = e => {
        setPhone(e.target.value) ;
    } ;

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={phone} onChange={onChangePhone} />
            </div>
            <div>
                <div>
                    <b>이름: </b> {name}
                </div>
                <div>
                    <b>번호:</b> {phone}
                </div>
            </div>
        </div>
    ) ;
}

export default Info ;