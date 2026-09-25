import fastify from "fastify";
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from 'fastify-type-provider-zod';
import { createCompletionRoute } from "./routes/create-completion";
import { getPendingGoalsRoutes } from "./routes/get-pending-goals";
import { createGoalRoute } from "./routes/create-goals";
import { getWeekSummaryRoute } from "./routes/get-week-summury";
import fastifyCors from "@fastify/cors";

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
    origin: '*',
})

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createGoalRoute)
app.register(createCompletionRoute)
app.register(getPendingGoalsRoutes)
app.register(getWeekSummaryRoute)

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP server running!')
}) 