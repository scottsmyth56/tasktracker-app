import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import EventPage from "./pages/events/EventPage";
import TaskPage from "./pages/tasks/TaskPage";
import Header from "./components/Header";
import Task from "./components/Task";
import Event from "./components/Event";
import LoginForm from "./pages/auth/LoginForm";
import { CurrentUserProvider } from "./contexts/UserContext";
import RegisterForm from "./pages/auth/RegisterForm";
import CreateTaskForm from "./pages/tasks/CreateTaskForm";
import CreateEventForm from "./pages/events/CreateEventForm";
import EditTask from "./pages/tasks/EditTaskForm";
import EditEvent from "./pages/events/EditEventForm";
import { ToastContainer } from "react-toastify";
import NotFoundPage from "./pages/NotFound";

function App() {
  return (
    <CurrentUserProvider>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" exact element={<TaskPage />} />
            <Route path="/events" exact element={<EventPage />} />
            <Route path="/tasks/:taskId" element={<Task />} />
            <Route path="/events/:eventId" element={<Event />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/createTask" element={<CreateTaskForm />} />
            <Route path="/editTask/:taskId" element={<EditTask />} />
            <Route path="/createEvent" element={<CreateEventForm />} />
            <Route path="/editEvent/:eventId" element={<EditEvent />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </CurrentUserProvider>
  );
}

export default App;
