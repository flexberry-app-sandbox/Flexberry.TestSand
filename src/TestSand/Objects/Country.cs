﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace NewPlatform.TestSand
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    //  *** Start programmer edit section *** (Using statements)

    //  *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Country.
    /// </summary>
    //  *** Start programmer edit section *** (Country CustomAttributes)

    //  *** End programmer edit section *** (Country CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("CountryE", new string[] {
            "Name as \'Name\'"})]
    [View("CountryL", new string[] {
            "Name as \'Name\'"})]
    public class Country : ICSSoft.STORMNET.DataObject
    {
        
        private string fName;
        
        //  *** Start programmer edit section *** (Country CustomMembers)

        //  *** End programmer edit section *** (Country CustomMembers)

        
        /// <summary>
        /// Name.
        /// </summary>
        //  *** Start programmer edit section *** (Country.Name CustomAttributes)

        //  *** End programmer edit section *** (Country.Name CustomAttributes)
        [StrLen(255)]
        [NotNull()]
        public virtual string Name
        {
            get
            {
                //  *** Start programmer edit section *** (Country.Name Get start)

                //  *** End programmer edit section *** (Country.Name Get start)
                string result = this.fName;
                //  *** Start programmer edit section *** (Country.Name Get end)

                //  *** End programmer edit section *** (Country.Name Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Country.Name Set start)

                //  *** End programmer edit section *** (Country.Name Set start)
                this.fName = value;
                //  *** Start programmer edit section *** (Country.Name Set end)

                //  *** End programmer edit section *** (Country.Name Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "CountryE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View CountryE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("CountryE", typeof(NewPlatform.TestSand.Country));
                }
            }
            
            /// <summary>
            /// "CountryL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View CountryL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("CountryL", typeof(NewPlatform.TestSand.Country));
                }
            }
        }
    }
}
