# org.GCOMM
A repository for the website of GCOMM.

---

This repository has two branches; `rolling` and `main`.

`main` has the stable branch of the website and easy-to-maintain environment while the `rolling` branch has most of the testing/experiments happen. It's where I implement and experiment the features I wish to add to the main branch, and will hopefully work.

### Prerequisites
To get started developing and working with the repository, you'll need:
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
### Cloning
Once all of those packages are installed in your machine, it's time to clone the repository:
```bash
git clone https://github.com/n2w-rc/o.GCOMM
cd 'o.GCOMM'
```

And lastly, this:
```bash
cd react-o1; npm install; npm start
```



---
### Contributing to GCOMM
We welcome contributions from everyone! Here's how you can help:

1. **Fork & Clone**: Fork this repository and clone it locally.
2. **Create a Branch**: Create a branch for your feature or bugfix.
   ```bash
   git checkout -b feature/feature-name
   ```
3. **Make Changes**: Make your changes and test them thoroughly.
4. **Commit**: Commit your changes with clear, descriptive messages.
5. **Push & PR**: Push to your fork and submit a pull request.

#### Guidelines
- Follow the existing code style and conventions
- Test your changes thoroughly
- Update documentation as needed
- Keep pull requests focused on a single feature/fix

We appreciate all kinds of contributions:
- Code improvements
- Bug fixes
- Documentation updates
- Feature suggestions
- UI/UX enhancements

### Contact / HMU
My AI has access to my secondary Google account to handle emails and check stuff.