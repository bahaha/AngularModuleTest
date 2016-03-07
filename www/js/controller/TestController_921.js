module.exports= function($scope, $state, TestService){
		console.log('enter controller_921')
		$scope.test = TestService.getTest()
	}
