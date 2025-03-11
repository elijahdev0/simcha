FROM node:20-alpine as base

# Set working directory
WORKDIR /app

# Install dependencies for both frontend and backend
FROM base as dependencies
COPY package.json package-lock.json ./
COPY server/package.json server/package-lock.json ./server/
RUN npm ci
RUN cd server && npm ci

# Build frontend
FROM dependencies as build-frontend
COPY . .
RUN npm run build

# Production stage
FROM base as production
ENV NODE_ENV=production

# Copy built frontend and server files
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=dependencies /app/server/node_modules ./server/node_modules
COPY --from=build-frontend /app/dist ./dist
COPY server ./server
COPY .env ./

# Expose ports
EXPOSE 3000 5173

# Start command
CMD ["node", "-r", "ts-node/register", "server/index.ts"] 