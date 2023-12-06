import { useRoutes } from "react-router-dom"
import * as paths from './const';
import { DashLayout, MainLayout } from "src/layouts";
import { CareerPage, ContactPage, DashBoardPage, NotFoundPage, SkillPage, WorkPage } from "src/pages";

export const MainRouter = () => {

    const mainRoutes = useRoutes([
        {
            path: paths.ROUTE_ROOT,
            children: [
                {
                    element: <DashLayout />,
                    children: [
                        {
                            path: paths.ROUTE_MAIN,
                            element: <DashBoardPage />
                        },
                    ]
                },
                {
                    element: <MainLayout />,
                    children: [
                        {
                            path: paths.ROUTE_CAREER,
                            element: <CareerPage />
                        },
                        {
                            path: paths.ROUTE_CONTACT,
                            element: <ContactPage />
                        },
                        {
                            path: paths.ROUTE_SKILL,
                            element: <SkillPage />
                        },
                        {
                            path: paths.ROUTE_WORK,
                            element: <WorkPage />
                        },
                    ]
                }
            ]
        },
        {
            path: "*",
            element: <NotFoundPage />
        }
    ]);

    return mainRoutes;
}