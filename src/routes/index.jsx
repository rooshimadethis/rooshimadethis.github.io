import Components from "../views/HomePage/Components.jsx";
import Blog from "../views/Blog/Blog";
import Projects from "../views/Projects/Projects"

let indexRoutes = [
    { path: "/blog", name: "Blog", component: Blog },
    { path: "/projects", name: "Projects", component: Projects },
    { path: "/", name: "Components", component: Components }
];

export default indexRoutes;