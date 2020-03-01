## Roadmap

### Goal
Build an interactive game that is played from a browser with webcam + mic.
- Multiplayer with multiple rooms
- AR enhanced, ar is added to create a fantasy environment
- Hand gesture recognition + action recognition
- Voice recognition to do commands
- Use of yolo to localize hands + faces + body
- Use keypoints to determine hand gesture
- 

### Technology stack

#### ML/DL
- Pytorch
- Yolo for body and hand position
- Body position
- Hand gesture recognition
- Image segmentation
- 

#### Frontend
- Frontend is a web page with access to web + cam.
- React + redux + hooks + rxjs
- Three.js + tree.ar.js
- redux kafka lenses
- Cam images are preprocessed by browser --> send to kafka --> processed in backend --> resend to subscribers

#### Backend
- React + redux + hooks + rxjs for front + tensorflowjs
- Aframe for AR/VR
- Nodejs + Express + Postgresql + Kafka for back
- AWS + Kafka + Airflow + Sagemaster
- Pytorch for ML/DL

#### Milestones
Define simple projects.

##### Face sentiment analysis
Use Udacity CV Project
- Localize face from webcam
- Send to Kafka
- Kafka sends to FaceEngine
- FaceEngine returns keypoints + sentiment analysis
- Metadata sended back to browser
- Browser displays metadata

##### Body position analysis
- Localize body
- Send to Kafka
- Kafka to BodyEngine
- BodyEngine returns keypoints + body position category
- Metadata send back to browser
- Browser displays metadata

##### Hand gesture analysis
- Localize hands on screen
- Send to Kafka
- Kafka sends to HandsEngine
- HandsEngine returns keypoints + category
- Metadata send back to browser
- Browser displays metadata

##### AI on the Edge
- Instead of processing images in backend do it in frontend with tensorflowjs
- Send metadata to kafka

##### Action recognition
- Image preprocessed in browser
- Metadata sended to kafka
- Kafka sends to ActionRecognitionEngine
- ActionRecognitionEngines recognizes action
- https://paperswithcode.com/paper/skeleton-based-action-recognition-with-4
- Metadata send back to browser
- Browser displays metadata


###### AR body display
-  


### Face recognition

### Face Sentiment Analysis

### Hand Recognition

### Yolo head + hand recognition

### Gesture recognition

### vid2vid