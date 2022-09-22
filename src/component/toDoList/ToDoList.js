import React, { useState } from 'react'
import { toast } from 'react-toastify'


const ToDoList = () => {
    const [value, setValue] = useState("")
    const [_indexSelected, setIndexSelected] = useState(null)
    const [listToDo, setListToDo] = useState([])

    const onClickButtonAdd = () => {
        if (value) {
            if (listToDo.length > 1 && _indexSelected !== null) {
                let list = listToDo.map((items, index) => {
                    if (_indexSelected == index) {
                        return Object.assign({}, items, { content: value })
                    } else {
                        return items
                    }
                })
                setListToDo(list)
                setValue("")
                setIndexSelected(null)
            } else {
                const obj = {
                    content: value
                }
                let list = []
                list.push(obj)
                setListToDo(listToDo.concat(list))
                toast.success("Success!")
                setValue("")
            }
        } else {
            // alert("Vui lòng nhập mục tiêu")
            toast.warn("Vui lòng nhập mục tiêu!")
        }
    }
    return (
        <div style={{ padding: "24px" }}>
            <h1>
                ToDoList
            </h1>
            <div>
                <input onChange={(value) => {
                    setValue(value.target.value)
                }} value={value} />
                <button type='button' onClick={onClickButtonAdd} >Add</button>
            </div>
            <div>
                {
                    listToDo.map((items, index) => {
                        return (
                            <div
                                key={index + ""}
                                style={{
                                    display: 'flex', flexDirection: 'row',

                                    margin: '10px',
                                    padding: "0px",
                                }}>
                                <p >{items.content}</p>
                                <button type='button' style={{ marginLeft: '10px' }} onClick={() => {
                                    console.log(index)
                                    setValue(items.content)
                                    setIndexSelected(index)
                                }}>
                                    Sửa
                                </button>
                                <button type='button' style={{ marginLeft: '10px' }} onClick={() => {
                                    let lst = listToDo.filter((_item, _index) => {
                                        return _index !== index
                                    })
                                    setListToDo(lst)
                                }}>
                                    Xóa
                                </button>
                            </div>
                        )
                    })
                }
            </div>


        </div>
    )

}

export default ToDoList