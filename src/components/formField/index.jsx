import React from 'react'

export default function FormField({Tag, labelText, type, value, nome, onChange}){
    return(
        <div>
            <label>
                {labelText}
                <Tag value={value} type={type} onChange={onChange}/>
            </label>
        </div>
    )
}