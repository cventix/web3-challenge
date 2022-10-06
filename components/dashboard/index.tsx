import React, { useCallback, useContext } from 'react';
import { Grid, Typography } from '@mui/material';
import { ConnectWallet, useAddress } from '@thirdweb-dev/react';
import { ContextType, UserContext } from '../layout';
import { WalletModal } from './walletModal';

export const Dashboard = () => {
  const { isLogin, open, setOpen } = useContext(UserContext) as ContextType;
  const address = useAddress();

  const generateEmptyBox = useCallback((count: number) => {
    const tempArray = Array.apply(null, Array(count)).map((x, i) => i);
    return tempArray.map((i) => (
      <Grid
        key={i}
        item
        xs={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          borderRadius: '24px',
          height: '96px',
          // border: "1px dashed #474747",
        }}
      >
        <Grid
          item
          sx={{
            width: '96px',
            border: '1px dashed #474747',
            height: '96px',
            borderRadius: '24px',
          }}
        ></Grid>
      </Grid>
    ));
  }, []);

  return (
    <Grid container>
      {/* Row 1 */}
      <Grid container mb={1.5}>
        {generateEmptyBox(12)}
      </Grid>
      {/* Row 2 */}
      <Grid container mb={1.5}>
        {generateEmptyBox(1)}
        <Grid
          item
          xs={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            borderRadius: '24px',
            height: '97px',
            width: '97px',
            // border: "1px dashed #474747",
          }}
        >
          <Grid
            item
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              width: '97px',
              // border: "1px dashed #474747",
              height: '97px',
              borderRadius: '24px',
              backgroundColor: '#1E1B24',
            }}
          >
            <img
              src={isLogin ? '/icons/2dolars.svg' : '/icons/unicorn.svg'}
              width={'64px'}
              height={'64px'}
            />
          </Grid>
        </Grid>
        <Grid container item xs display="flex" alignItems="center" justifyContent="center">
          <Grid
            container
            item
            xs
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              borderRadius: '24px',
              height: '97px',
              width: '100%',
              // border: "1px dashed #474747",
            }}
          >
            <Grid
              container
              item
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                width: '98.8%',
                // border: "1px dashed #474747",
                height: '100%',
                borderRadius: '24px',
                backgroundColor: '#1E1B24',
                padding: '0 20px',
              }}
            >
              <Grid item display="flex" flexDirection="column" xs={9}>
                <Typography variant="subtitle1">
                  {isLogin ? 'Invite & Earn - Bonus Phase' : 'Get started with $20 USDC*'}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: '#625E6A' }}>
                  {isLogin
                    ? 'Earn $2 for every person you invited who completes verification.'
                    : '*First time members will be able to collect a reward when completing their first task'}
                </Typography>
              </Grid>
              <Grid container item display="flex" flexDirection="column" xs={3}>
                <Grid
                  item
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    backgroundColor: '#ADBAFF',
                    color: '#1E1B24',
                    fontWeight: 700,
                    height: '64px',
                    borderRadius: '16px',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    if (!isLogin) setOpen(true);
                  }}
                >
                  {isLogin ? 'Invite & Earn' : 'Create Wallet'}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {generateEmptyBox(1)}
      </Grid>
      {/* Row 3 */}
      <Grid container mb={1.5}>
        {generateEmptyBox(1)}
        <Grid container item xs display="flex" alignItems="center" justifyContent="center">
          <Grid
            container
            item
            xs
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              borderRadius: '24px',
              height: '97px',
              width: '100%',
              // border: "1px dashed #474747",
            }}
          >
            <Grid
              container
              item
              display="flex"
              alignItems="center"
              sx={{
                width: '96.5%',
                // border: "1px dashed #474747",
                height: '100%',
                borderRadius: '24px',
                backgroundColor: '#1E1B24',
                padding: '0 20px',
              }}
            >
              <Grid container item flexDirection="column">
                <Grid item alignItems="center" display="flex" justifyContent="space-between">
                  <Typography variant="h5">Create</Typography>
                  <Typography variant="h5" sx={{ cursor: 'pointer' }}>
                    👉
                  </Typography>
                </Grid>
                <Typography variant="subtitle1" sx={{ color: '#827E88' }}>
                  Create a Wallet in seconds
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container item xs display="flex" alignItems="center" justifyContent="center">
          <Grid
            container
            item
            xs
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              borderRadius: '24px',
              height: '97px',
              width: '100%',
              // border: "1px dashed #474747",
            }}
          >
            <Grid
              container
              item
              display="flex"
              alignItems="center"
              sx={{
                width: '96.5%',
                // border: "1px dashed #474747",
                height: '100%',
                borderRadius: '24px',
                backgroundColor: '#1E1B24',
                padding: '0 20px',
              }}
            >
              <Grid container item flexDirection="column">
                <Grid item alignItems="center" display="flex" justifyContent="space-between">
                  <Typography variant="h5">Verify</Typography>
                  <Typography variant="h5" sx={{ cursor: 'pointer' }}>
                    👉
                  </Typography>
                </Grid>
                <Typography variant="subtitle1" sx={{ color: '#827E88' }}>
                  Connect your identities
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container item xs display="flex" alignItems="center" justifyContent="center">
          <Grid
            container
            item
            xs
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              borderRadius: '24px',
              height: '97px',
              width: '100%',
              // border: "1px dashed #474747",
            }}
          >
            <Grid
              container
              item
              display="flex"
              alignItems="center"
              sx={{
                width: '96.5%',
                // border: "1px dashed #474747",
                height: '100%',
                borderRadius: '24px',
                backgroundColor: '#1E1B24',
                padding: '0 20px',
              }}
            >
              <Grid container item flexDirection="column">
                <Grid item alignItems="center" display="flex" justifyContent="space-between">
                  <Typography variant="h5">Earn</Typography>
                  <Typography variant="h5" sx={{ cursor: 'pointer' }}>
                    👉
                  </Typography>
                </Grid>
                <Typography variant="subtitle1" sx={{ color: '#827E88' }}>
                  Get paid in under 5 minutes.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            borderRadius: '24px',
            height: '97px',
            width: '97px',
            // border: "1px dashed #474747",
          }}
        >
          <Grid
            item
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              width: '97px',
              // border: "1px dashed #474747",
              height: '97px',
              borderRadius: '24px',
              backgroundColor: '#1E1B24',
            }}
          >
            <img src={'/icons/greenDolar.svg'} width={'64px'} height={'64px'} />
          </Grid>
        </Grid>
        {generateEmptyBox(1)}
      </Grid>
      {/* Row 4 */}
      <Grid container display="flex" mb={1.5}>
        <Grid container item xs={1}>
          <Grid
            item
            xs={12}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              borderRadius: '24px',
              height: '96px',

              // border: "1px dashed #474747",
            }}
            mb={1.5}
          >
            <Grid
              item
              sx={{
                width: '96px',
                border: '1px dashed #474747',
                height: '96px',
                borderRadius: '24px',
              }}
            ></Grid>
          </Grid>
          <Grid
            item
            xs={12}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              borderRadius: '24px',
              height: '96px',
              // border: "1px dashed #474747",
            }}
            mb={1.5}
          >
            <Grid
              item
              sx={{
                width: '96px',
                border: '1px dashed #474747',
                height: '96px',
                borderRadius: '24px',
              }}
            ></Grid>
          </Grid>
          <Grid
            item
            xs={12}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              borderRadius: '24px',
              height: '96px',
              // border: "1px dashed #474747",
            }}
            mb={1.5}
          >
            <Grid
              item
              sx={{
                width: '96px',
                border: '1px dashed #474747',
                height: '96px',
                borderRadius: '24px',
              }}
            ></Grid>
          </Grid>
          <Grid
            item
            xs={12}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              borderRadius: '24px',
              height: '96px',
              // border: "1px dashed #474747",
            }}
          >
            <Grid
              item
              sx={{
                width: '96px',
                border: '1px dashed #474747',
                height: '96px',
                borderRadius: '24px',
              }}
            ></Grid>
          </Grid>
        </Grid>

        <Grid container item xs display="flex" justifyContent="center">
          <Grid
            container
            item
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              borderRadius: '24px',
              height: '418px',
              width: '100%',
              // border: "1px dashed #474747",
            }}
          >
            <Grid
              container
              item
              display="flex"
              flexDirection="column"
              justifyContent="flex-end"
              sx={{
                width: '97%',
                // border: "1px dashed #474747",
                height: '100%',
                borderRadius: '24px',
                backgroundColor: '#1E1B24',
                padding: '20px 0 20px 20px',
              }}
            >
              <Grid item mb={3}>
                <Typography variant="h2" sx={{ fontWeight: 500 }}>
                  Get Started
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#827E88' }}>
                  Your Web3 journey begins here
                </Typography>
              </Grid>
              <Grid container item display="flex" alignItems="center">
                <Grid
                  item
                  sx={{
                    height: '52px',
                    backgroundColor: '#F0F0F0',
                    color: '#000',
                    fontWeight: 500,
                    borderRadius: '80px',
                    padding: '0 30px',
                    cursor: 'pointer',
                  }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {isLogin ? 'Verify' : 'Create →'}
                </Grid>
                <Grid
                  item
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx={2}
                  sx={{ color: '#767676' }}
                >
                  OR
                </Grid>
                <Grid
                  item
                  sx={{
                    height: '52px',
                    backgroundColor: 'transparent',
                    color: '#fff',
                    fontWeight: 500,
                    borderRadius: '80px',
                    padding: '0 30px',
                    border: '1px solid #585858',
                    cursor: 'pointer',
                  }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  onClick={() => {
                    if (!isLogin) setOpen(true);
                    else console.log('Please disconnect/logout first.');
                  }}
                >
                  {isLogin ? 'Leaderboard' : 'Connect Wallet'}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container item xs={3}>
          <Grid
            container
            item
            xs={12}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Grid
              container
              item
              xs={12}
              display="flex"
              justifyContent="center"
              sx={{
                borderRadius: '24px',
                height: '203px',
                // width: "100%",
                // border: "1px dashed #474747",
              }}
            >
              <Grid
                container
                item
                display="flex"
                justifyContent="flex-end"
                flexDirection="column"
                sx={{
                  width: '96%',
                  // border: "1px dashed #474747",
                  height: '100%',
                  borderRadius: '24px',
                  backgroundColor: '#1E1B24',
                  padding: '20px 0 20px 20px',
                }}
              >
                <Typography variant="h2" sx={{ fontWeight: 500 }}>
                  $150
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#827E88' }}>
                  Earnable right now
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item xs={12} display="flex" alignItems="flex-end" justifyContent="center">
            <Grid
              container
              item
              xs={12}
              display="flex"
              alignItems="flex-end"
              justifyContent="center"
              sx={{
                borderRadius: '24px',
                height: '203px',
                // width: "100%",
                // border: "1px dashed #474747",
              }}
            >
              <Grid
                container
                item
                display="flex"
                justifyContent="flex-end"
                sx={{
                  width: '96%',
                  // border: "1px dashed #474747",
                  height: '100%',
                  borderRadius: '24px',
                  backgroundColor: '#1E1B24',
                  padding: '20px 0 20px 20px',
                }}
              >
                <Grid container item xs={12}>
                  <img src="/icons/clark.svg" width={'40px'} height={'40px'} />
                  <Grid item xs="auto" ml={2} mb={1}>
                    <Typography variant="subtitle2" sx={{ color: '#fff' }}>
                      {isLogin ? 'Wonder Woman' : 'Clark Kent'}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: '#827E88' }}>
                      0XDA1...A1Q1
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h2" sx={{ fontWeight: 500 }}>
                    $1,457
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: '#827E88' }}>
                    Top Monthly Earner
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container item xs={3}>
          <Grid
            container
            item
            xs={12}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Grid
              container
              item
              xs={12}
              display="flex"
              justifyContent="center"
              sx={{
                borderRadius: '24px',
                height: '203px',
                // width: "100%",
                // border: "1px dashed #474747",
              }}
            >
              <Grid
                container
                item
                display="flex"
                justifyContent="flex-end"
                flexDirection="column"
                sx={{
                  width: '96%',
                  // border: "1px dashed #474747",
                  height: '100%',
                  borderRadius: '24px',
                  backgroundColor: '#1E1B24',
                  padding: '20px 0 20px 20px',
                }}
              >
                <Typography variant="h2" sx={{ fontWeight: 500 }}>
                  $765k
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#827E88' }}>
                  Monthly Platform Earn
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item xs={12} display="flex" alignItems="flex-end" justifyContent="center">
            <Grid
              container
              item
              xs={12}
              display="flex"
              alignItems="flex-end"
              justifyContent="center"
              sx={{
                borderRadius: '24px',
                height: '203px',
                // width: "100%",
                // border: "1px dashed #474747",
              }}
            >
              <Grid
                container
                item
                display="flex"
                justifyContent="flex-end"
                flexDirection="column"
                sx={{
                  width: '96%',
                  // border: "1px dashed #474747",
                  height: '100%',
                  borderRadius: '24px',
                  backgroundColor: '#1E1B24',
                  padding: '20px 0 20px 20px',
                }}
              >
                <Typography variant="h2" sx={{ fontWeight: 500 }}>
                  1.2m
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#827E88' }}>
                  Tasks completed
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container item xs={1}>
          <Grid
            item
            xs={12}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              borderRadius: '24px',
              height: '96px',
              // border: "1px dashed #474747",
            }}
            mb={1.5}
          >
            <Grid
              item
              sx={{
                width: '96px',
                border: '1px dashed #474747',
                height: '96px',
                borderRadius: '24px',
              }}
            ></Grid>
          </Grid>
          <Grid
            item
            xs={12}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              borderRadius: '24px',
              height: '96px',
              // border: "1px dashed #474747",
            }}
            mb={1.5}
          >
            <Grid
              item
              sx={{
                width: '96px',
                border: '1px dashed #474747',
                height: '96px',
                borderRadius: '24px',
              }}
            ></Grid>
          </Grid>
          <Grid
            item
            xs={12}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              borderRadius: '24px',
              height: '96px',
              // border: "1px dashed #474747",
            }}
            mb={1.5}
          >
            <Grid
              item
              sx={{
                width: '96px',
                border: '1px dashed #474747',
                height: '96px',
                borderRadius: '24px',
              }}
            ></Grid>
          </Grid>
          <Grid
            item
            xs={12}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              borderRadius: '24px',
              height: '96px',
              // border: "1px dashed #474747",
            }}
          >
            <Grid
              item
              sx={{
                width: '96px',
                border: '1px dashed #474747',
                height: '96px',
                borderRadius: '24px',
              }}
            ></Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Row 5 */}
      <Grid container mb={1.5}>
        {generateEmptyBox(12)}
      </Grid>
      <WalletModal open={open} onClose={() => setOpen(false)}>
        <ConnectWallet />
      </WalletModal>
    </Grid>
  );
};
