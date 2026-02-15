import { Container, Toolbar, Button } from "@mui/material";

import "./style.scss"

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="pge-wrapper">
        <Container className="pge-container">
            <div className="pge">
                <Toolbar className="pge-toolbar">
                    <Button
                        href="/"
                        color="inherit"
                    >
                        What Should I Play?
                    </Button>
                </Toolbar>
                {children}
            </div>
        </Container>
    </div>
  );
}