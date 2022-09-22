import { useEffect, useState } from "react";
import "../../res/css/home.css";
import banner from "../../res/image/hhh.jpg"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const User = () => {
    const navigate = useNavigate()
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    const [listUser, setListUser] = useState([])
    const [name, setName] = useState("")
    const [job, setJob] = useState("")
    useEffect(() => {

        getListUser()

    }, []);

    const getListUser = async () => {
        const result = await axios.get("https://reqres.in/api/users?page=2")
        // console.log("result: ", result.data?.data[0])
        if (result.data?.data) {
            if (result.data?.data?.length > 0) {
                setListUser(result.data?.data)
            }
        }
    }

    const addUser = async () => {
        if (name && job) {
            const data = {
                name: name,
                job: job
            }
            const result = await axios.post('/user', JSON.stringify(data))
            console.log("result addUser: ", result?.data)
        } else {
            toast.warn("Vui lòng nhập đầy đủ thông tin !!!")
        }
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '10px'
        }}>
            <div style={{
                display: "flex",
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '10px'
            }}>
                <input
                    placeholder="Name"
                    onChange={(value) => {
                        setName(value?.target?.value)
                    }}
                />
                <input
                    style={{ marginTop: "10px" }}
                    placeholder="Job"
                    onChange={(value) => {
                        setJob(value?.target?.value)
                    }}
                />
                <button type="button" onClick={addUser}
                    style={{ marginTop: "10px" }}>
                    Add
                </button>
            </div>

            <h2>
                LIST USER
            </h2>
            {listUser &&
                listUser.map((item, index) => {
                    return (
                        <div key={index} style={{
                            border: '1px solid grey',
                            padding: '10px',
                            height: "10px",
                            width: '300px'
                        }}
                            onClick={() => {
                                console.log(item)
                                navigate("/user/" + item.id)
                            }}
                        >

                            {index + 1}. {item?.first_name}

                        </div>
                    )
                })
            }
        </div>
    );
}




export default User;
