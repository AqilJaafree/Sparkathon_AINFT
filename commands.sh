#install git
git --version

#install node
npm --version

#solana tools suite
https://docs.solana.com/cli/install-solana-cli-tools#windows
cmd /c "curl https://release.solana.com/v1.16.15/solana-install-init-x86_64-pc-windows-msvc.exe --output C:\solana-install-tmp\solana-install-init.exe --create-dirs"
C:\solana-install-tmp\solana-install-init.exe v1.16.15
solana --version
solana-keygen --version

#install sugar
https://github.com/metaplex-foundation/sugar/releases/tag/sugar-cmv3-alpha.3
./sugar --version

#get current directory
# C:\Users\wanaqil\Sparkathon_AINFT
pwd
==========================================================================
#pubkey: 3UMkuKVrW2CHYyXbWqDCyy4pZ1w4PezkuZQ6BDGvLqJ4
==========================================================================
#Save this seed phrase and your BIP39 passphrase to recover your new keypair:
#tail mail hundred sense fresh light vote flock industry shove law dinosaur
solana-keygen new --outfile C:\Users\wanaqil\Sparkathon_AINFT\Owner.json

=====================================================================================
#pubkey: GWJoNjbydW49nj4LjHqzgRMbbCQq68Lsz4AqgEzjhfVM
=====================================================================================
#Save this seed phrase and your BIP39 passphrase to recover your new keypair:
#clever climb sibling erode ketchup drink purpose fashion improve switch vague benefit
solana-keygen new --outfile C:\Users\wanaqil\Sparkathon_AINFT\Creator.json

solana airdrop 1 3UMkuKVrW2CHYyXbWqDCyy4pZ1w4PezkuZQ6BDGvLqJ4 --url https://api.devnet.solana.com
solana airdrop 1   --url https://api.devnet.solana.com
solana config set --keypair C:\Users\wanaqil\Sparkathon_AINFT\Owner.json
solana config set --url https://metaplex.devnet.rpc.pool.com
solana config get

./sugar create-config
./sugar upload
#Collection mint ID: GbEindRrY7gB7RtET17NAGvsMVrLDKi6xaxuCY4WfVic
#Candy machine ID: GQvMPQkaC2DXZfBFXxNop93TUXiYMyxgEvCu3vpDAJ7o
./sugar deploy
./sugar verify
./sugar guard add
./sugar guard show