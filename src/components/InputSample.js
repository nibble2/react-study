import React, {useState} from 'react'

function InputSample() {
    const [inputs, setInputs] = useState ({
        myName: '',
        nickName: ''
    }) ;

    const { myName, nickName } = inputs ;

    const onChange = e => {
        const { value, name } = e.target ;
        setInputs ({
             ...inputs,
             [name]: value
        }) ;
    } ;

    const onReset = () => {
        setInputs ({
            myName: '',
            nickName: ''
        }) ;
    } ;

    return (
        <div>
            <input
                placeholder="이름"
                name="myName"
                value={myName}
                onChange={onChange}
            />
            <input
                placeholder="닉네임"
                name="nickName"
                value={nickName}
                onChange={onChange} 
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {myName} ({nickName})
            </div>
        </div>
    ) ;
}

export default InputSample ;