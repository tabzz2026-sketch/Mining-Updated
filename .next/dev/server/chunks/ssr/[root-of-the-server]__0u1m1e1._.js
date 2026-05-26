module.exports = [
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/perf_hooks [external] (perf_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("perf_hooks", () => require("perf_hooks"));

module.exports = mod;
}),
"[project]/src/db/schema.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dispatches",
    ()=>dispatches,
    "users",
    ()=>users
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/table.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/serial.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/text.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/varchar.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/timestamp.js [app-rsc] (ecmascript)");
;
const users = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pgTable"])('users', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serial"])('id').primaryKey(),
    username: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('username', {
        length: 100
    }).unique().notNull(),
    password_hash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])('password_hash').notNull(),
    role: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('role', {
        length: 50
    }).default('admin').notNull(),
    created_at: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])('created_at').defaultNow()
});
const dispatches = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pgTable"])('dispatches', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serial"])('id').primaryKey(),
    qr_id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('qr_id', {
        length: 20
    }).unique().notNull(),
    manual_challan_no: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('manual_challan_no', {
        length: 100
    }),
    concession_type_no: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('concession_type_no', {
        length: 255
    }),
    seller_name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('seller_name', {
        length: 255
    }),
    seller_location: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('seller_location', {
        length: 255
    }),
    valid_from: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])('valid_from'),
    valid_upto: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])('valid_upto'),
    route_source: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('route_source', {
        length: 255
    }),
    route_destination: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('route_destination', {
        length: 255
    }),
    vehicle_no: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('vehicle_no', {
        length: 50
    }),
    consignee_details: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('consignee_details', {
        length: 255
    }),
    product_name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('product_name', {
        length: 255
    }),
    quantity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('quantity', {
        length: 100
    }),
    // Newly Added Fields
    mineral_granted_qty: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('mineral_granted_qty', {
        length: 100
    }),
    mineral_rate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('mineral_rate', {
        length: 100
    }),
    total_amount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('total_amount', {
        length: 100
    }),
    gst_no: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('gst_no', {
        length: 100
    }),
    gst_qty: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('gst_qty', {
        length: 100
    }),
    gst_amount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('gst_amount', {
        length: 100
    }),
    driver_details: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('driver_details', {
        length: 255
    }),
    created_at: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])('created_at').defaultNow()
});
}),
"[project]/src/db/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$postgres$2d$js$2f$driver$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/postgres-js/driver.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postgres$2f$src$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/postgres/src/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/db/schema.js [app-rsc] (ecmascript)");
;
;
;
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
    throw new Error('DATABASE_URL is missing in environment variables. Make sure it is set in .env.local');
}
const client = globalThis.postgresClient || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postgres$2f$src$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(connectionString, {
    prepare: false
});
if ("TURBOPACK compile-time truthy", 1) {
    globalThis.postgresClient = client;
}
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$postgres$2d$js$2f$driver$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["drizzle"])(client, {
    schema: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
});
}),
"[project]/src/lib/password.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hashPassword",
    ()=>hashPassword,
    "verifyPassword",
    ()=>verifyPassword
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
const HASH_ALGORITHM = "pbkdf2_sha512";
const HASH_DIGEST = "sha512";
const HASH_ITERATIONS = 120000;
const HASH_KEY_LENGTH = 64;
function hashPassword(password) {
    const salt = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomBytes"])(16).toString("base64url");
    const hash = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["pbkdf2Sync"])(password, salt, HASH_ITERATIONS, HASH_KEY_LENGTH, HASH_DIGEST).toString("base64url");
    return `${HASH_ALGORITHM}$${HASH_ITERATIONS}$${salt}$${hash}`;
}
function verifyPassword(password, storedHash) {
    if (!password || !storedHash) return false;
    const [algorithm, iterations, salt, hash] = storedHash.split("$");
    if (algorithm !== HASH_ALGORITHM || !iterations || !salt || !hash) {
        return false;
    }
    const calculatedHash = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["pbkdf2Sync"])(password, salt, Number(iterations), HASH_KEY_LENGTH, HASH_DIGEST);
    const storedHashBuffer = Buffer.from(hash, "base64url");
    return calculatedHash.length === storedHashBuffer.length && (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["timingSafeEqual"])(calculatedHash, storedHashBuffer);
}
}),
"[project]/src/lib/auth-constants.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AUTH_COOKIE_NAME",
    ()=>AUTH_COOKIE_NAME,
    "SESSION_DURATION_SECONDS",
    ()=>SESSION_DURATION_SECONDS
]);
const AUTH_COOKIE_NAME = "admin_session";
const SESSION_DURATION_SECONDS = 60 * 60 * 8;
}),
"[project]/src/lib/jwt.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "signJwt",
    ()=>signJwt,
    "verifyJwt",
    ()=>verifyJwt
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
const JWT_ALGORITHM = "HS256";
function getJwtSecret() {
    const secret = process.env.JWT_SECRET || process.env.SESSION_SECRET;
    if (secret) return secret;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return "development-only-change-me";
}
function base64UrlEncode(value) {
    const input = typeof value === "string" ? value : JSON.stringify(value);
    return Buffer.from(input).toString("base64url");
}
function base64UrlDecode(value) {
    return Buffer.from(value, "base64url").toString("utf8");
}
function sign(unsignedToken) {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHmac"])("sha256", getJwtSecret()).update(unsignedToken).digest("base64url");
}
function signaturesMatch(expected, actual) {
    const expectedBuffer = Buffer.from(expected);
    const actualBuffer = Buffer.from(actual);
    return expectedBuffer.length === actualBuffer.length && (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["timingSafeEqual"])(expectedBuffer, actualBuffer);
}
function signJwt(payload, expiresInSeconds) {
    const now = Math.floor(Date.now() / 1000);
    const header = {
        alg: JWT_ALGORITHM,
        typ: "JWT"
    };
    const body = {
        ...payload,
        iat: now,
        exp: now + expiresInSeconds
    };
    const unsignedToken = `${base64UrlEncode(header)}.${base64UrlEncode(body)}`;
    return `${unsignedToken}.${sign(unsignedToken)}`;
}
function verifyJwt(token) {
    if (!token || typeof token !== "string") return null;
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const [encodedHeader, encodedPayload, signature] = parts;
    const unsignedToken = `${encodedHeader}.${encodedPayload}`;
    const expectedSignature = sign(unsignedToken);
    if (!signaturesMatch(expectedSignature, signature)) return null;
    try {
        const header = JSON.parse(base64UrlDecode(encodedHeader));
        const payload = JSON.parse(base64UrlDecode(encodedPayload));
        if (header.alg !== JWT_ALGORITHM || header.typ !== "JWT") return null;
        if (!payload.exp || payload.exp <= Math.floor(Date.now() / 1000)) {
            return null;
        }
        return payload;
    } catch (error) {
        return null;
    }
}
}),
"[project]/src/lib/session.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSession",
    ()=>createSession,
    "destroySession",
    ()=>destroySession,
    "getCurrentSession",
    ()=>getCurrentSession,
    "requireAdminSession",
    ()=>requireAdminSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth-constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$jwt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/jwt.js [app-rsc] (ecmascript)");
;
;
;
;
function getSessionExpiresAt() {
    return new Date(Date.now() + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SESSION_DURATION_SECONDS"] * 1000);
}
async function createSession(user) {
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$jwt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signJwt"])({
        userId: user.id,
        username: user.username,
        role: user.role
    }, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SESSION_DURATION_SECONDS"]);
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AUTH_COOKIE_NAME"], token, {
        httpOnly: true,
        secure: ("TURBOPACK compile-time value", "development") === "production",
        sameSite: "lax",
        expires: getSessionExpiresAt(),
        path: "/"
    });
}
async function getCurrentSession() {
    const token = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AUTH_COOKIE_NAME"])?.value;
    const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$jwt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyJwt"])(token);
    if (!session?.userId || session.role !== "admin") return null;
    return session;
}
async function requireAdminSession() {
    const session = await getCurrentSession();
    if (!session) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/admin/login");
    }
    return session;
}
async function destroySession() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.delete(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AUTH_COOKIE_NAME"]);
}
}),
"[project]/src/actions/auth.action.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00ab104a5dec7f9a905160cc91027b4a4b15cd3695":{"name":"logoutAction"},"60f5a57ba5b264b085e572193ebf617512688cb832":{"name":"loginAction"}},"src/actions/auth.action.js",""] */ __turbopack_context__.s([
    "loginAction",
    ()=>loginAction,
    "logoutAction",
    ()=>logoutAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/expressions/conditions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/db/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/db/schema.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$password$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/password.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/session.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function loginAction(_state, formData) {
    const username = String(formData.get("username") || "").trim();
    const password = String(formData.get("password") || "");
    if (!username || !password) {
        return {
            error: "Enter both username and password."
        };
    }
    let user;
    try {
        [user] = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"].username, username)).limit(1);
    } catch (error) {
        console.error("Login error:", error);
        return {
            error: "Could not verify credentials right now."
        };
    }
    if (!user || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$password$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyPassword"])(password, user.password_hash)) {
        return {
            error: "Invalid username or password."
        };
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSession"])(user);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/admin/dashboard");
}
async function logoutAction() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["destroySession"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/admin/login");
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    loginAction,
    logoutAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(loginAction, "60f5a57ba5b264b085e572193ebf617512688cb832", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logoutAction, "00ab104a5dec7f9a905160cc91027b4a4b15cd3695", null);
}),
"[project]/src/lib/challanDate.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CHALLAN_TIME_ZONE",
    ()=>CHALLAN_TIME_ZONE,
    "calculateChallanValidHours",
    ()=>calculateChallanValidHours,
    "formatChallanDate",
    ()=>formatChallanDate,
    "formatChallanDateTime",
    ()=>formatChallanDateTime,
    "formatChallanTime",
    ()=>formatChallanTime,
    "getChallanDate",
    ()=>getChallanDate,
    "parseChallanInputDate",
    ()=>parseChallanInputDate
]);
const CHALLAN_TIME_ZONE = "Asia/Kolkata";
const CHALLAN_TIME_ZONE_OFFSET_MINUTES = 5 * 60 + 30;
const DATE_TIME_LOCAL_PATTERN = /^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})(?::(\d{2}))?/;
const dateTimeFormatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: CHALLAN_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
});
const toValidDate = (value)=>{
    if (!value) return null;
    const date = value instanceof Date ? value : new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
};
function parseChallanInputDate(value) {
    if (!value) return null;
    const match = String(value).trim().match(DATE_TIME_LOCAL_PATTERN);
    if (!match) return toValidDate(value);
    const [, year, month, day, hour, minute, second = "0"] = match;
    const utcTime = Date.UTC(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute), Number(second)) - CHALLAN_TIME_ZONE_OFFSET_MINUTES * 60 * 1000;
    return toValidDate(new Date(utcTime));
}
function getChallanDate(value) {
    return toValidDate(value);
}
function getChallanDateParts(value) {
    const date = getChallanDate(value);
    if (!date) return null;
    return Object.fromEntries(dateTimeFormatter.formatToParts(date).filter((part)=>part.type !== "literal").map((part)=>[
            part.type,
            part.value
        ]));
}
function formatChallanDate(value) {
    const parts = getChallanDateParts(value);
    if (!parts) return "";
    return `${parts.day}-${parts.month}-${parts.year}`;
}
function formatChallanTime(value) {
    const parts = getChallanDateParts(value);
    if (!parts) return "";
    const period = Number(parts.hour) >= 12 ? "PM" : "AM";
    return `${parts.hour}:${parts.minute} ${period}`;
}
function formatChallanDateTime(value) {
    const date = formatChallanDate(value);
    const time = formatChallanTime(value);
    return date && time ? `${date} ${time}` : "";
}
function calculateChallanValidHours(fromDateValue, uptoDateValue) {
    const fromDate = getChallanDate(fromDateValue);
    const uptoDate = getChallanDate(uptoDateValue);
    if (!fromDate || !uptoDate) return 5;
    const diffMs = uptoDate.getTime() - fromDate.getTime();
    if (diffMs <= 0) return 0;
    return Math.floor(diffMs / (1000 * 60 * 60));
}
}),
"[project]/src/actions/dispatch.action.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40c44f9166555987e8d7519b600a83012941b4a7cf":{"name":"createDispatchAction"}},"src/actions/dispatch.action.js",""] */ __turbopack_context__.s([
    "createDispatchAction",
    ()=>createDispatchAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/db/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/db/schema.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$challanDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/challanDate.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/session.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
// Helper to generate the custom challan format based on District Code
const generateChallanNo = (districtCode)=>{
    // Use the provided district code (e.g., 'JK01') or fallback to 'JKXX'
    const prefix = districtCode || 'JKO4Y';
    // Generates 10 random digits
    const numbers = Math.floor(1000000000 + Math.random() * 9000000000);
    // Format: JKxxY-1234567890
    return `${prefix}Y-${numbers}`;
};
async function createDispatchAction(formData) {
    try {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentSession"])();
        if (!session) {
            return {
                success: false,
                error: "Please sign in to generate a dispatch."
            };
        }
        // 1. Basic validation
        if (!formData.valid_from || !formData.valid_upto) {
            return {
                success: false,
                error: "Validity time is required"
            };
        }
        const validFromDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$challanDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseChallanInputDate"])(formData.valid_from);
        const validUptoDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$challanDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseChallanInputDate"])(formData.valid_upto);
        if (!validFromDate || !validUptoDate) {
            return {
                success: false,
                error: "Invalid validity time"
            };
        }
        // 3. Assemble the secure payload
        const payload = {
            manual_challan_no: formData.manual_challan_no || null,
            concession_type_no: formData.concession_type_no,
            seller_name: formData.seller_name,
            seller_location: formData.seller_location,
            route_source: formData.route_source,
            route_destination: formData.route_destination,
            vehicle_no: formData.vehicle_no,
            consignee_details: formData.consignee_details,
            product_name: formData.product_name,
            quantity: formData.quantity,
            mineral_granted_qty: formData.mineral_granted_qty,
            mineral_rate: formData.mineral_rate,
            total_amount: formData.total_amount,
            gst_no: formData.gst_no,
            gst_qty: formData.gst_qty,
            gst_amount: formData.gst_amount,
            driver_details: formData.driver_details,
            // Pass the district_code from the frontend into the generator
            qr_id: generateChallanNo(formData.district_code),
            valid_from: validFromDate,
            valid_upto: validUptoDate
        };
        const [newDispatch] = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dispatches"]).values(payload).returning();
        return {
            success: true,
            data: newDispatch
        };
    } catch (error) {
        console.error("Error creating dispatch:", error);
        if (error.code === '23505') {
            return {
                success: false,
                error: "Challan collision. Please try generating again."
            };
        }
        return {
            success: false,
            error: "Failed to generate dispatch due to a server error."
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createDispatchAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createDispatchAction, "40c44f9166555987e8d7519b600a83012941b4a7cf", null);
}),
"[project]/.next-internal/server/app/admin/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/auth.action.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/actions/dispatch.action.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$auth$2e$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/auth.action.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$dispatch$2e$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/dispatch.action.js [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/.next-internal/server/app/admin/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/auth.action.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/actions/dispatch.action.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00ab104a5dec7f9a905160cc91027b4a4b15cd3695",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$auth$2e$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logoutAction"],
    "40c44f9166555987e8d7519b600a83012941b4a7cf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$dispatch$2e$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDispatchAction"],
    "60f5a57ba5b264b085e572193ebf617512688cb832",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$auth$2e$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loginAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$dashboard$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$dispatch$2e$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/dashboard/page/actions.js { ACTIONS_MODULE0 => "[project]/src/actions/auth.action.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/actions/dispatch.action.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$auth$2e$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/auth.action.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$dispatch$2e$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/dispatch.action.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0u1m1e1._.js.map