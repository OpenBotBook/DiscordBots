import discord
from discord.ext import commands

bot = commands.Bot(command_prefix='!')

@bot.command()
async def poll(ctx, *args):
    question = ' '.join(args)
    reactions = ['👍', '👎']

    message = await ctx.send(f'{question}\n{" ".join(reactions)}')

    for reaction in reactions:
        await message.add_reaction(reaction)

bot.run('YOUR_TOKEN_HERE')
