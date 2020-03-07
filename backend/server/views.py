import tornado
import tornado.websocket
from tornado.web import RequestHandler

class HelloWorld(RequestHandler):
    """Print 'Hello, world!' as the response body."""

    def get(self):
        """Handle a GET request for saying Hello World!."""
        self.write("Hello, world!")

class WSHandler(tornado.websocket.WebSocketHandler):
    def open(self):
        print('new connection')
        self.write_message("Hello World")
      
    def on_message(self, message):
        print('message received %s' % message)
 
    def on_close(self):
      print('connection closed')