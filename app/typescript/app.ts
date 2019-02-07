import * as io from 'socket.io-client';

const socketToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbiI6IjE3MUJBRjNFQTNFMzQ4MEMzQUQ3IiwicmVhZF9vbmx5Ijp0cnVlLCJwcmV2ZW50X21hc3RlciI6dHJ1ZSwieW91dHViZV9pZCI6IlVDT3NKdXNCUjc3RUdvZzltT09DcUw1ZyJ9.i4R4_mReUJotwL5SJa8-W0FlP7QElAwD6RoLTByQEbk';
const streamlabs = io(`https://sockets.streamlabs.com?token=${socketToken}`, {transports: ['websocket']});

streamlabs.on('event', (e:StreamlabsEvent) => {
    console.log(e);
});