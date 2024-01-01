---
title: 2022 in review
date: 2022-12-26
---

Well, it was 2.5 years since I posted the [srl.next](https://srl295.github.io/2020/07/16/srl-next/) article and clearly a lot has gone on.

We’re at the end of the year, when in the [Gregorian calendar](https://en.wikipedia.org/wiki/Gregorian_calendar) we remember and celebrate Christ’s incarnation—Christmas!  So this post will serve as a bit of an update.

##  What’s been going on?

### Code Hive Tx, LLC

<img src="https://srl295.github.io/2022/12/26/code-hive-2022/code-hive-logo.png" title="Code Hive Tx, LLC: code, people, world" width="50%"/>

I organized my consulting work as `Code Hive Tx, LLC`, with its own site <https://codehivetx.us>.  I’m not pivoting into apiary work, although that is a potential future hobby.  Instead, this is a hive for code: software development.  It's a Texas Code Hive, headquartered in Dripping Springs, TX, USA where I have shared office space.  Code Hive began its first consulting services January 2022.

### CLDR Infrastructure

As mentioned in the {% post_link srl-next srl.next %} post, I continue to work on Unicode’s Common Locale Data Repository ([CLDR](https://cldr.unicode.org)). A lot has happened, both in terms of project and data growth, but also in terms of process and software modernization.  CLDR has had an emphasis on paying down technical debt, and much progress has been made.  The crowdsourced linguistic voting platform has gone from a Java servlet-based structure to a modernized J2EE application, including OpenAPI Spec 3.0 (Swagger) REST documentation.  The front end now has Vue3 as its core, largely replacing many home grown frameworks.  Ansible was used to automate VM provisioning, with the result that an additional staging server was recently added, with almost no time spent in server configuration before it was ready to be productive.

### Fintech

I’ve also picked up a local client in the fintech space, focussed around distributed computing and data science needs in python.  I’ve brought in improvements to the automated build system as well as deploying custom Prometheus collectors and dashboards to make sure everything is working the way it ought to be.  Actually, Prometheus figures somewhere into most of my projects, including telling me whether the home printer is accidentally powered off or not!

### CLDR Keyboard Spec

Additionally, I’ve been involved in the CLDR Keyboard subcommittee for some time.  As of this writing, there isn’t a great landing page with current status on this activity, although it’s on the TODO list.  You can read the current landing page [here](https://cldr.unicode.org/index/keyboard-workgroup).

In summary, the work of this subcommittee is to bring the [UTS #35 Part 7](http://www.unicode.org/reports/tr35/tr35-keyboards.html#Contents) from its current state as merely describing keyboards, to become _the_ standard industry-wide for implementing all keyboards.  That is both ambitious, and also needs to be justified as a goal.  I’m going to attempt to do both in a future post. Very briefly, though, currently keyboard development is completely platform-specific and so keyboard authors must convince the respective organizations and communities to independently develop for their language on Android, iOS, macOS, Linux, Windows, just to name a few.

What I did want to mention here is that many people have been volunteering their time, or been able to spend time on behalf of their respective organizations, in order to attend these subcommittee meetings over the past couple of years.  However, that has not itself resulted in rapid development of the specification.

To that end, Code Hive Tx, LLC has received a [Unicode Adopt-a-Character grant](https://home.unicode.org/adopt-a-character/about-adopt-a-character/) in order to progress the spec and fund participation in the meeting.  As a result, I’ve been able to produce a draft specification with many improvements, as well as spend time on sample data, actual DTDs, test code, and so on.  This enables the other team members to make comments on this spec work and has resulted in much progress.

But a spec without an implementation is, as they say, just a spec. That’s where Keyman comes in.

### SIL Keyman

In addition to the spec work above, Code Hive Tx, LLC also has a contract with [SIL International](http://www.sil.org) to add a production implementation of the CLDR Keyboard spec and associated tools to [Keyman](https://keyman.com), SIL’s widely used open-source keyboard platform.

I recently returned from a week-long planning meeting in Siem Reap, Cambodia with the Keyman team.  Besides an interesting trip and location itself, it was great to discuss in-person the future of keyboarding.

<img src="https://srl295.github.io/2022/12/26/code-hive-2022/srl-tuktuk.jpeg" title="Steven holding on to a Tuk-Tuk" />

## Next keystrokes

As mentioned above, the spec work and the implementation work go hand-in-hand, giving leverage to the prospect of a major sea change in ease of keyboard implementation.  As of last week, we have the first actual keystrokes processed using a prototype CLDR keyboard.  But that’s for another post: [Keyboard Progress](./2022-kbd-progress)

-----

Merry Christmas and Happy New Year from Code Hive Tx, LLC!
