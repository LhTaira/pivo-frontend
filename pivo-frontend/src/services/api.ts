// @ts-nocheck
import axios from 'axios';
import Constants from "expo-constants";
const { manifest } = Constants;

const uri = `http://${manifest.debuggerHost.split(':').shift()}:3000`;

const api = axios.create({
  baseURL: uri,
});

export default api;
