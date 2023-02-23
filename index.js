router.post('/message/post', async ctx => {
  const { ToUserName, FromUserName, Content, CreateTime } = ctx.request.body;

  ctx.body = {
    ToUserName: FromUserName,
    FromUserName: ToUserName,
    CreateTime: +new Date(),
    MsgType: 'text',
    Content: `反弹你发的消息：${Content}`,
  };
});