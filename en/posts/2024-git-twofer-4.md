---
title: git twofer, the fourth
date: 2024-10-14
tags:
    - git
---

In this installment we discuss two commands that are helpful for using git — offline!

---

_Note: I'm slowly bringing these articles over from the srl295 blog. See <https://srl295.github.io/archives/> for previous blog posts._

Well, it's been more than a year since I wrote [the last git twofer](https://srl295.github.io/2022/04/26/git-twofer-3/) but here we are again.

GitHub seems to be the most popular place for public source code development today. Of course, GitHub came on the scene a few years after git. When “GitHub is down” (not that often!) in some circles that means “all work must stop.”  However, a website being down doesn't prevent local work from happening.

Furthermore, there are projects out there that work in terms of patches. So, it is valuable to know how to create patchfiles from git.  It might even help you make progress someday in the face of a network outage.

Let's get to it then.

## Creating Patchfiles: `git format-patch`

Quick start, if you just need to create a patchfile for the HEAD commit, run:

```shell
$ git format-patch HEAD~
```

This will create a single file named `0001-Your-commit-message.patch` (Assuming your commit message was `Your commit message`).

You can also create patches for a range of commits — you'll get one patchfile per commit.

```shell
$ git format-patch sometag..HEAD
$ git format-patch 3c0d242c..HEAD
$ git format-patch upstream/main..HEAD
```

(where `sometag` is a branch or tag or commit).

You can inspect the patchfiles, they contain the commit message and the contents in diff format.

```diff
From 7182413c28c3db9a62ed9a00ec74b1143d2c11e5 Mon Sep 17 00:00:00 2001
From: "Steven R. Loomis" <srl295@gmail.com>
Date: Mon, 14 Oct 2024 09:40:02 -0500
Subject: [PATCH] My commit message

The extended commit message
---
 some/changed/file | 1 +
 1 file changed, 1 insertion(+), 1 deletions(-)

diff --git a/some/changed/file b/some/changed/file
index 6151a938..e22fb172 100644
--- a/some/changed/file
+++ b/some/changed/file
@@ -1888,6 +1888,7 @@
 /**
  * MATH FUNCTIONS
  *
  * The following performs maths
  */
-// TODO: Need to support 1+1 here
+if (a == 1 && b == 1) return 2;

```

So now what? You can email those patches to a mailing list or change tracker, or put them on a floppy disk!

## Merging Patchfiles: `git am`

On the flip side, it's pretty easy to apply such a patch file, simply run:

```shell
$ git am 0001-Your-commit-message.patch
```

This will apply the patch as a commit, updating git HEAD.

