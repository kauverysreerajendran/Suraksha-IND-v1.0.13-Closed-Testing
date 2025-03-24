/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/components/CustomAlert`; params?: Router.UnknownInputParams; } | { pathname: `/components/CustomText`; params?: Router.UnknownInputParams; } | { pathname: `/components/HealthActivityPopup`; params?: Router.UnknownInputParams; } | { pathname: `/components/SecureStorage`; params?: Router.UnknownInputParams; } | { pathname: `/components/WaterReminderPopUp`; params?: Router.UnknownInputParams; } | { pathname: `/navigations/BottomTabNavigator`; params?: Router.UnknownInputParams; } | { pathname: `/navigations/StackNavigation`; params?: Router.UnknownInputParams; } | { pathname: `/redux/reducer`; params?: Router.UnknownInputParams; } | { pathname: `/redux/store`; params?: Router.UnknownInputParams; } | { pathname: `/screens/ActivitiesBottomMenu`; params?: Router.UnknownInputParams; } | { pathname: `/screens/AddClinicalProfile`; params?: Router.UnknownInputParams; } | { pathname: `/screens/AddMetabolicProfile`; params?: Router.UnknownInputParams; } | { pathname: `/screens/AddPatientProfile`; params?: Router.UnknownInputParams; } | { pathname: `/screens/AddUserProfile`; params?: Router.UnknownInputParams; } | { pathname: `/screens/AdminDashboard`; params?: Router.UnknownInputParams; } | { pathname: `/screens/BreathingExercise`; params?: Router.UnknownInputParams; } | { pathname: `/screens/DailyExercise`; params?: Router.UnknownInputParams; } | { pathname: `/screens/DailyUploads`; params?: Router.UnknownInputParams; } | { pathname: `/screens/DietaryChange`; params?: Router.UnknownInputParams; } | { pathname: `/screens/Disclaimer`; params?: Router.UnknownInputParams; } | { pathname: `/screens/Exercise`; params?: Router.UnknownInputParams; } | { pathname: `/screens/ExerciseVideos`; params?: Router.UnknownInputParams; } | { pathname: `/screens/Insights`; params?: Router.UnknownInputParams; } | { pathname: `/screens/LifeStyle`; params?: Router.UnknownInputParams; } | { pathname: `/screens/Login`; params?: Router.UnknownInputParams; } | { pathname: `/screens/MedicationInclusion`; params?: Router.UnknownInputParams; } | { pathname: `/screens/MedicationManager`; params?: Router.UnknownInputParams; } | { pathname: `/screens/Myactivity`; params?: Router.UnknownInputParams; } | { pathname: `/screens/MyFoodPlate`; params?: Router.UnknownInputParams; } | { pathname: `/screens/NonVegDiet`; params?: Router.UnknownInputParams; } | { pathname: `/screens/NotificationPage`; params?: Router.UnknownInputParams; } | { pathname: `/screens/PatientDailyLogTable`; params?: Router.UnknownInputParams; } | { pathname: `/screens/PatientDashboard`; params?: Router.UnknownInputParams; } | { pathname: `/screens/PatientMedication`; params?: Router.UnknownInputParams; } | { pathname: `/screens/PatientProfile`; params?: Router.UnknownInputParams; } | { pathname: `/screens/ReviewFeedback`; params?: Router.UnknownInputParams; } | { pathname: `/screens/SleepRituals`; params?: Router.UnknownInputParams; } | { pathname: `/screens/Support`; params?: Router.UnknownInputParams; } | { pathname: `/screens/TestNavigation`; params?: Router.UnknownInputParams; } | { pathname: `/screens/UserFeedBack`; params?: Router.UnknownInputParams; } | { pathname: `/screens/VegDiet`; params?: Router.UnknownInputParams; } | { pathname: `/screens/ViewPatientProfile`; params?: Router.UnknownInputParams; } | { pathname: `/screens/ViewPatientTable`; params?: Router.UnknownInputParams; } | { pathname: `/screens/Walking`; params?: Router.UnknownInputParams; } | { pathname: `/screens/WalkingGuidelines`; params?: Router.UnknownInputParams; } | { pathname: `/screens/Water`; params?: Router.UnknownInputParams; } | { pathname: `/screens/Welcome`; params?: Router.UnknownInputParams; } | { pathname: `/screens/Yoga`; params?: Router.UnknownInputParams; } | { pathname: `/scripts/notifyOnFailure`; params?: Router.UnknownInputParams; } | { pathname: `/services/apiService`; params?: Router.UnknownInputParams; } | { pathname: `/translation/texts`; params?: Router.UnknownInputParams; } | { pathname: `/translation/TranslationContext`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/components/CustomAlert`; params?: Router.UnknownOutputParams; } | { pathname: `/components/CustomText`; params?: Router.UnknownOutputParams; } | { pathname: `/components/HealthActivityPopup`; params?: Router.UnknownOutputParams; } | { pathname: `/components/SecureStorage`; params?: Router.UnknownOutputParams; } | { pathname: `/components/WaterReminderPopUp`; params?: Router.UnknownOutputParams; } | { pathname: `/navigations/BottomTabNavigator`; params?: Router.UnknownOutputParams; } | { pathname: `/navigations/StackNavigation`; params?: Router.UnknownOutputParams; } | { pathname: `/redux/reducer`; params?: Router.UnknownOutputParams; } | { pathname: `/redux/store`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/ActivitiesBottomMenu`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/AddClinicalProfile`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/AddMetabolicProfile`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/AddPatientProfile`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/AddUserProfile`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/AdminDashboard`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/BreathingExercise`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/DailyExercise`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/DailyUploads`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/DietaryChange`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/Disclaimer`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/Exercise`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/ExerciseVideos`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/Insights`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/LifeStyle`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/Login`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/MedicationInclusion`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/MedicationManager`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/Myactivity`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/MyFoodPlate`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/NonVegDiet`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/NotificationPage`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/PatientDailyLogTable`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/PatientDashboard`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/PatientMedication`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/PatientProfile`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/ReviewFeedback`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/SleepRituals`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/Support`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/TestNavigation`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/UserFeedBack`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/VegDiet`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/ViewPatientProfile`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/ViewPatientTable`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/Walking`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/WalkingGuidelines`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/Water`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/Welcome`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/Yoga`; params?: Router.UnknownOutputParams; } | { pathname: `/scripts/notifyOnFailure`; params?: Router.UnknownOutputParams; } | { pathname: `/services/apiService`; params?: Router.UnknownOutputParams; } | { pathname: `/translation/texts`; params?: Router.UnknownOutputParams; } | { pathname: `/translation/TranslationContext`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/components/CustomAlert${`?${string}` | `#${string}` | ''}` | `/components/CustomText${`?${string}` | `#${string}` | ''}` | `/components/HealthActivityPopup${`?${string}` | `#${string}` | ''}` | `/components/SecureStorage${`?${string}` | `#${string}` | ''}` | `/components/WaterReminderPopUp${`?${string}` | `#${string}` | ''}` | `/navigations/BottomTabNavigator${`?${string}` | `#${string}` | ''}` | `/navigations/StackNavigation${`?${string}` | `#${string}` | ''}` | `/redux/reducer${`?${string}` | `#${string}` | ''}` | `/redux/store${`?${string}` | `#${string}` | ''}` | `/screens/ActivitiesBottomMenu${`?${string}` | `#${string}` | ''}` | `/screens/AddClinicalProfile${`?${string}` | `#${string}` | ''}` | `/screens/AddMetabolicProfile${`?${string}` | `#${string}` | ''}` | `/screens/AddPatientProfile${`?${string}` | `#${string}` | ''}` | `/screens/AddUserProfile${`?${string}` | `#${string}` | ''}` | `/screens/AdminDashboard${`?${string}` | `#${string}` | ''}` | `/screens/BreathingExercise${`?${string}` | `#${string}` | ''}` | `/screens/DailyExercise${`?${string}` | `#${string}` | ''}` | `/screens/DailyUploads${`?${string}` | `#${string}` | ''}` | `/screens/DietaryChange${`?${string}` | `#${string}` | ''}` | `/screens/Disclaimer${`?${string}` | `#${string}` | ''}` | `/screens/Exercise${`?${string}` | `#${string}` | ''}` | `/screens/ExerciseVideos${`?${string}` | `#${string}` | ''}` | `/screens/Insights${`?${string}` | `#${string}` | ''}` | `/screens/LifeStyle${`?${string}` | `#${string}` | ''}` | `/screens/Login${`?${string}` | `#${string}` | ''}` | `/screens/MedicationInclusion${`?${string}` | `#${string}` | ''}` | `/screens/MedicationManager${`?${string}` | `#${string}` | ''}` | `/screens/Myactivity${`?${string}` | `#${string}` | ''}` | `/screens/MyFoodPlate${`?${string}` | `#${string}` | ''}` | `/screens/NonVegDiet${`?${string}` | `#${string}` | ''}` | `/screens/NotificationPage${`?${string}` | `#${string}` | ''}` | `/screens/PatientDailyLogTable${`?${string}` | `#${string}` | ''}` | `/screens/PatientDashboard${`?${string}` | `#${string}` | ''}` | `/screens/PatientMedication${`?${string}` | `#${string}` | ''}` | `/screens/PatientProfile${`?${string}` | `#${string}` | ''}` | `/screens/ReviewFeedback${`?${string}` | `#${string}` | ''}` | `/screens/SleepRituals${`?${string}` | `#${string}` | ''}` | `/screens/Support${`?${string}` | `#${string}` | ''}` | `/screens/TestNavigation${`?${string}` | `#${string}` | ''}` | `/screens/UserFeedBack${`?${string}` | `#${string}` | ''}` | `/screens/VegDiet${`?${string}` | `#${string}` | ''}` | `/screens/ViewPatientProfile${`?${string}` | `#${string}` | ''}` | `/screens/ViewPatientTable${`?${string}` | `#${string}` | ''}` | `/screens/Walking${`?${string}` | `#${string}` | ''}` | `/screens/WalkingGuidelines${`?${string}` | `#${string}` | ''}` | `/screens/Water${`?${string}` | `#${string}` | ''}` | `/screens/Welcome${`?${string}` | `#${string}` | ''}` | `/screens/Yoga${`?${string}` | `#${string}` | ''}` | `/scripts/notifyOnFailure${`?${string}` | `#${string}` | ''}` | `/services/apiService${`?${string}` | `#${string}` | ''}` | `/translation/texts${`?${string}` | `#${string}` | ''}` | `/translation/TranslationContext${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/components/CustomAlert`; params?: Router.UnknownInputParams; } | { pathname: `/components/CustomText`; params?: Router.UnknownInputParams; } | { pathname: `/components/HealthActivityPopup`; params?: Router.UnknownInputParams; } | { pathname: `/components/SecureStorage`; params?: Router.UnknownInputParams; } | { pathname: `/components/WaterReminderPopUp`; params?: Router.UnknownInputParams; } | { pathname: `/navigations/BottomTabNavigator`; params?: Router.UnknownInputParams; } | { pathname: `/navigations/StackNavigation`; params?: Router.UnknownInputParams; } | { pathname: `/redux/reducer`; params?: Router.UnknownInputParams; } | { pathname: `/redux/store`; params?: Router.UnknownInputParams; } | { pathname: `/screens/ActivitiesBottomMenu`; params?: Router.UnknownInputParams; } | { pathname: `/screens/AddClinicalProfile`; params?: Router.UnknownInputParams; } | { pathname: `/screens/AddMetabolicProfile`; params?: Router.UnknownInputParams; } | { pathname: `/screens/AddPatientProfile`; params?: Router.UnknownInputParams; } | { pathname: `/screens/AddUserProfile`; params?: Router.UnknownInputParams; } | { pathname: `/screens/AdminDashboard`; params?: Router.UnknownInputParams; } | { pathname: `/screens/BreathingExercise`; params?: Router.UnknownInputParams; } | { pathname: `/screens/DailyExercise`; params?: Router.UnknownInputParams; } | { pathname: `/screens/DailyUploads`; params?: Router.UnknownInputParams; } | { pathname: `/screens/DietaryChange`; params?: Router.UnknownInputParams; } | { pathname: `/screens/Disclaimer`; params?: Router.UnknownInputParams; } | { pathname: `/screens/Exercise`; params?: Router.UnknownInputParams; } | { pathname: `/screens/ExerciseVideos`; params?: Router.UnknownInputParams; } | { pathname: `/screens/Insights`; params?: Router.UnknownInputParams; } | { pathname: `/screens/LifeStyle`; params?: Router.UnknownInputParams; } | { pathname: `/screens/Login`; params?: Router.UnknownInputParams; } | { pathname: `/screens/MedicationInclusion`; params?: Router.UnknownInputParams; } | { pathname: `/screens/MedicationManager`; params?: Router.UnknownInputParams; } | { pathname: `/screens/Myactivity`; params?: Router.UnknownInputParams; } | { pathname: `/screens/MyFoodPlate`; params?: Router.UnknownInputParams; } | { pathname: `/screens/NonVegDiet`; params?: Router.UnknownInputParams; } | { pathname: `/screens/NotificationPage`; params?: Router.UnknownInputParams; } | { pathname: `/screens/PatientDailyLogTable`; params?: Router.UnknownInputParams; } | { pathname: `/screens/PatientDashboard`; params?: Router.UnknownInputParams; } | { pathname: `/screens/PatientMedication`; params?: Router.UnknownInputParams; } | { pathname: `/screens/PatientProfile`; params?: Router.UnknownInputParams; } | { pathname: `/screens/ReviewFeedback`; params?: Router.UnknownInputParams; } | { pathname: `/screens/SleepRituals`; params?: Router.UnknownInputParams; } | { pathname: `/screens/Support`; params?: Router.UnknownInputParams; } | { pathname: `/screens/TestNavigation`; params?: Router.UnknownInputParams; } | { pathname: `/screens/UserFeedBack`; params?: Router.UnknownInputParams; } | { pathname: `/screens/VegDiet`; params?: Router.UnknownInputParams; } | { pathname: `/screens/ViewPatientProfile`; params?: Router.UnknownInputParams; } | { pathname: `/screens/ViewPatientTable`; params?: Router.UnknownInputParams; } | { pathname: `/screens/Walking`; params?: Router.UnknownInputParams; } | { pathname: `/screens/WalkingGuidelines`; params?: Router.UnknownInputParams; } | { pathname: `/screens/Water`; params?: Router.UnknownInputParams; } | { pathname: `/screens/Welcome`; params?: Router.UnknownInputParams; } | { pathname: `/screens/Yoga`; params?: Router.UnknownInputParams; } | { pathname: `/scripts/notifyOnFailure`; params?: Router.UnknownInputParams; } | { pathname: `/services/apiService`; params?: Router.UnknownInputParams; } | { pathname: `/translation/texts`; params?: Router.UnknownInputParams; } | { pathname: `/translation/TranslationContext`; params?: Router.UnknownInputParams; };
    }
  }
}
