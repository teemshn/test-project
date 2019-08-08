using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Mytest.RNMytest
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNMytestModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNMytestModule"/>.
        /// </summary>
        internal RNMytestModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNMytest";
            }
        }
    }
}
