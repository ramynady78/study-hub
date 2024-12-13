import { createSlice } from "@reduxjs/toolkit";

const initailRegisteredCourses = JSON.parse(localStorage.getItem("registeredCourse")) || [];
const todayDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
}
const registerCourse = createSlice({
    name:"registerCourse",
    initialState:initailRegisteredCourses,
    reducers:{
        register:(state , action) => {
            const courseClone = {...action.payload , dateRegistered:todayDate() , finishedLessons:[]}
            state.push(courseClone);
            localStorage.setItem("registeredCourse", JSON.stringify(state));
            return state;
        },
        leavingCoure:(state , action) => {
            const mycourses = state.filter((course) => course.id !== action.payload.id);
            localStorage.setItem("registeredCourse", JSON.stringify(mycourses));
            return mycourses;

        },
        updateFinishedLessons: (state, action) => {
            const {  lessonName , courseId } = action.payload;
            const course = state.find((course) => course.id === courseId);
            if (course) {
                // Toggle the lesson in finishedLessons
                if (course.finishedLessons.includes(lessonName)) {
                    course.finishedLessons = course.finishedLessons.filter((lesson) => lesson !== lessonName);
                } else {
                    course.finishedLessons.push(lessonName);
                }
            }

            // Save updated state to localStorage
            localStorage.setItem("registeredCourse", JSON.stringify(state));
            return state;
        }
    }
})

export const {register , leavingCoure ,updateFinishedLessons} = registerCourse.actions;
export default registerCourse.reducer;