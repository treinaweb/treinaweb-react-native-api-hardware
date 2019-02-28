#import "MyTextModule.h"


@implementation MyTextModule

RCT_EXPORT_MODULE(MyText);

RCT_EXPORT_METHOD(show:(NSString *)message callback:(RCTResponseSenderBlock)callback){
  NSString *response = [@"Mensagem do iOS: " stringByAppendingString:message];
  callback(@[response]);
}
@end
