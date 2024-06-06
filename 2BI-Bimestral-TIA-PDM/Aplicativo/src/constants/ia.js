require('@tensorflow/tfjs')
const toxicity = require('@tensorflow-models/toxicity');
import '@tensorflow/tfjs-react-native'
import * as tensor from '@tensorflow/tfjs';

export default async function classificador(texto) {
    const threshold = 0.8;

    await tensor.setBackend('cpu')
    await tensor.ready()

    const model = await toxicity.load(threshold);
  
    const predictions = await model.classify([texto]);
  
    return predictions[0].label;
}