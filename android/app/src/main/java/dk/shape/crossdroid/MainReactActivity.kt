package dk.shape.crossdroid

import com.facebook.react.ReactInstanceManager
import com.facebook.react.ReactRootView
import com.facebook.react.LifecycleState
import com.facebook.react.shell.MainReactPackage
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import com.facebook.react.ReactActivity
import com.facebook.react.common.LifecycleState
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler


class MainReactActivity : ReactActivity(), DefaultHardwareBackBtnHandler {
    private var mReactRootView: ReactRootView? = null
    private var mReactInstanceManager: ReactInstanceManager? = null

    override fun onCreate(savedInstanceState: Bundle) {
        super.onCreate(savedInstanceState)

        mReactRootView = ReactRootView(this)
        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(application)
                .setBundleAssetName("index.android.bundle")
                .setJSMainModulePath("index")
                .addPackage(MainReactPackage())
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build()
        // The string here (e.g. "MyReactNativeApp") has to match
        // the string in AppRegistry.registerComponent() in index.js
        mReactRootView!!.startReactApplication(mReactInstanceManager, "RNCrossdroid", null)

        setContentView(mReactRootView)
    }

    override fun invokeDefaultOnBackPressed() {
        super.onBackPressed()
    }
}