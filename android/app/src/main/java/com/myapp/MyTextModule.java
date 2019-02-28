package com.myapp;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class MyTextModule extends ReactContextBaseJavaModule{
    public MyTextModule(ReactApplicationContext reactContext){
        super(reactContext);
    }

    @Override
    public String getName(){
        return "MyText";
    }

    @ReactMethod
    public void show(String message, Callback callback){
        callback.invoke("Mensagem do Android: " + message);
    }
}