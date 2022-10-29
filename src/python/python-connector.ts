import {
  LabjackConnectorInput,
  LabjackConnectorResponse,
} from 'proto/build/labjack-connector';
import { PythonShell } from 'python-shell';

export const runLabjackScript = ({
  analogInputNo,
  duration,
}: LabjackConnectorInput): Promise<LabjackConnectorResponse> => {
  const arg1 = String(analogInputNo);
  const arg2 = String(duration);
  return new Promise(async function (resolve, reject) {
    const result = [];
    const pyShell = new PythonShell('src/python/labjackU6_data_reader.py', {
      args: [arg1, arg2],
    });
    pyShell.on('stderr', (e) => {
      console.log(e);
    });
    pyShell.on('message', (message) => {
      result.push(message);
    });
    pyShell.on('close', () => {
      resolve({ response: result.map((e) => JSON.parse(e)) });
    });
  });
};
