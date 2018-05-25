package dk.shape.crossdroid

import android.app.Application
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.shell.MainReactPackage
import com.facebook.soloader.SoLoader

class CrossApp: Application(), ReactApplication {

    private val mReactNativeHost = object : ReactNativeHost(this) {
        override fun getUseDeveloperSupport() = BuildConfig.DEBUG

        override fun getPackages()= listOf(
                    MainReactPackage())

        override fun getJSMainModuleName() = "index"
    }

    override fun getReactNativeHost() = mReactNativeHost

    override fun onCreate() {
        super.onCreate()
        SoLoader.init(this,false)
    }
}