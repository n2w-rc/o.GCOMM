# org.GCOMM
A repository for the website of GCOMM.

---

This repository has two branches; `dev` and `main`.

`main` usually has the stable version of the website and easy-to-maintain environment while `dev` has most of the testing/experiments happen. It's where I implement and experiment the features I wish to add to the main branch, and will hopefully work.

#### Prerequisites
To get started developing, you'll need:
- Git
- Node.js + npm

If you're lazy, just go with these commands in dedicated Linux distributions.
**Gentoo**:
```bash
sudo emerge --ask dev-vcs/git net-libs/nodejs
```

**NixOS**:
Update channel and check package availability, just in case:
```bash
sudo nix-channel --update
nix search nixpkgs nodejs git
```
You can freely choose your own packages within the website itself: https://search.nixos.org/packages

Now, just your configuration.nix:
```nix
# /etc/nixos/configuration.nix
{ pkgs, ... }:

{
  environment.systemPackages = with pkgs; [
    git
    nodejs_24 # <- You may choose a different version, though I recommend this.
  ];
}
```

Once all of those packages are installed in your machine, it's time to clone the repository:
```bash
git clone https://github.com/n2w-rc/o.GCOMM
cd 'o.GCOMM'
```

I assume you've copied the above command, so you may now paste this command:
```bash
cd react-o1; npm install
```


---
### Contact / HMU
My AI has access to my secondary Google account to handle emails and check stuff.
Please share files and other materials via Google services at: notboop0001@gmail.com.