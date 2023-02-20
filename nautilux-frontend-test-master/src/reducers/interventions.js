import axios from "axios";

const INTERVENTION_URL = `http://localhost:3001/interventions/`;

export default function Interventions() {
    return axios.get(INTERVENTION_URL)
}