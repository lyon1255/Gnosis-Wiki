# Technical Architecture

## Infrastructure
- **Auth Master API:** Handles JWT tokens, bans, and global account data.
- **Realm Server API:** Manages character persistence and inventory saves.
- **Redis Layer:** Real-time Pub/Sub for cross-server chat and tracking.
- **Zone Servers:** Individual simulation processes for each Level.

## Security
- **Proxy Layer:** Obfuscates Game Server IPs to prevent DDoS.
- **Server-Side Validation:** All combat and movement are verified by the server.
