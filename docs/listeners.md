---
id: listeners
title: Notifications
sidebar_label: Notifications
slug: /listeners
---

You can also send email notifications to users when they are given access to an entity. ShareDialog fires an `UserAbilityChanged` event when the user's access gets changed and attaches the `SendUserAbilityChangedNotification` listener to it. If you want to send an email notification, then add the following in EventServiceProvider:

```jsx
use Geekyants\ShareDialog\Events\UserAbilityChanged;
use Geekyants\ShareDialog\Listeners\SendUserAbilityChangedNotification;
protected $listen = [
    ...
        UserAbilityChanged::class => [
            SendUserAbilityChangedNotification::class,
        ]

    ];
```

Additionally, you can modify the email template by publishing the share-dialog mail resources. After running this command, the mail notification template will be located in the

`resources/vendor/share-dialog/mail` directory:

```jsx
php artisan vendor:publish  --tag="mail"
```

You can attach your own listeners to the event. For example, if you want to attach a `SendSlackNotification` listener to the event, you can add the following code:

```jsx
use Geekyants\ShareDialog\Events\UserAbilityChanged;

...

protected $listen = [
        UserAbilityChanged::class => [
            SendSlackNotification::class,
        ]
    ];
```