# Frontend

```
npm i

amplify init

amplify import auth

amplify push

npm start

amplify add hosting
```

- Make sure a native and web app client exists in the cognito user pool

- Add the following environment variables to the build vars:

AMPLIFY_NATIVECLIENT_ID
AMPLIFY_USERPOOL_ID
AMPLIFY_WEBCLIENT_ID

[Details](https://aws.amazon.com/blogs/mobile/use-existing-cognito-resources-for-your-amplify-api-storage-and-more/)
[Publishing and CI/CD](https://aws.amazon.com/blogs/aws/host-your-apps-with-aws-amplify-console-from-the-aws-amplify-cli/)
