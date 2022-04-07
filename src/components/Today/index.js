import styled from "styled-components";
import { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../../context/UserContext";
import dayjs from "dayjs";
import "dayjs/locale/pt";
import Header from "../Header";
//import Footer from "../Footer";


export default function Today() {
    const [todayHabits, setTodayHabits] = useState();
    const { habitsCompleted, setHabitsCompleted, token } = useContext(UserContext);
    const date = dayjs().locale("pt").format("DD/MM");
    const weekday = dayjs().locale("pt").format("dddd");
    const shortWeekday = weekday.replace("-feira", "");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    function todayHabitsList() {

        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);
        promise.then((response) => {
            setTodayHabits(response.data);
            setHabitsCompleted(
                (response.data.filter((habit) => habit.done).length /
                    response.data.length) * 100
            );
        })
        promise.catch((error) => { console.log(error.response) });
    }

    const habitCheck = (id) => {

        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, null, config);
        promise.then(todayHabitsList);
        promise.catch((error) => (console.log(error.response)));
    };

    const habitUncheck = (id) => {

        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, null, config);
        promise.then(todayHabitsList);
        promise.catch((error) => (console.log(error.response)));
    };

    function toggle(id) {
        todayHabits.find((habit) => habit.id === id).done
            ? habitUncheck(id)
            : habitCheck(id);
    }

    return (
        <>
            <Header />
            <Main>
                {shortWeekday}, {date}
                
                {habitsCompleted === 0 ?
                    <p>Nenhum hábito concluido ainda</p>
                    :
                    <p>{habitsCompleted.toFixed()}% dos hábitos concluídos</p>
                }

                { todayHabits ?

                <p>Fazer map com habitos</p>

            :
            <>
            </>
            }

            </Main>
        </>
    )

}


const Main = styled.div`
p{
    font-size: 17.976px;
    line-height: 22px;

    color: #BABABA;
}`