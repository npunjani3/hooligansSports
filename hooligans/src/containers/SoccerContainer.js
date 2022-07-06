import { Container } from "@mui/system";
import { SoccerStandings } from "../components/SoccerStandings.tsx";

export const SoccerContainer = () => {
    return(
        <Container>
            <SoccerStandings />
            <h1>Odds</h1>
        </Container>
    )
}
